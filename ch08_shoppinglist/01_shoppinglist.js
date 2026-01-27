const addBtn = document.getElementById("add-btn");
const nameInput = document.getElementById("item-name");
const priceInput = document.getElementById("item-price");
const cardList = document.getElementById("shopping-list");

const buyAmountEl = document.getElementById("buy-amount");
const remainAmountEl = document.getElementById("remain-amount");
const summaryBox = document.querySelector(".price-summary");

const TOTAL_MONEY = 100000;

// 로컬스토리지에서 불러오기
let items = JSON.parse(localStorage.getItem("items")) || [];

/* 저장 */
function saveItems() {
  localStorage.setItem("items", JSON.stringify(items));
}

/* 렌더링 */
function render() {
  cardList.innerHTML = "";

  let totalBuy = 0;

  items.forEach((item, index) => {
    if (item.checked) {
      totalBuy += Number(item.price);
    }

    const card = document.createElement("div");
    card.className = "shopping-card";
    if (item.checked) card.classList.add("checked");

    card.innerHTML = `
      <button class="card-delete" data-index="${index}">✕</button>

      <div class="card-top">
        <input type="checkbox" ${item.checked ? "checked" : ""} />
        <span class="card-name">${item.name}</span>
      </div>

      <div class="card-price">
        ${Number(item.price).toLocaleString()}원
      </div>
    `;

    /* 카드 클릭 → 체크 토글 */
    card.addEventListener("click", () => {
      item.checked = !item.checked;
      saveItems();
      render();
    });

    /* 삭제 버튼 클릭 (이벤트 전파 차단) */
    const deleteBtn = card.querySelector(".card-delete");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      items.splice(index, 1);
      saveItems();
      render();
    });

    cardList.appendChild(card);
  });

  // 금액 표시
  buyAmountEl.textContent = totalBuy.toLocaleString() + "원";

  const remain = TOTAL_MONEY - totalBuy;
  remainAmountEl.textContent =
    (remain < 0 ? "-" : "") + Math.abs(remain).toLocaleString() + "원";

  // 예산 초과 시 경고 스타일
  summaryBox.classList.toggle("over", remain < 0);
}

/* 추가 버튼 */
addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  if (!name || price <= 0) return;

  items.push({
    name,
    price,
    checked: false,
  });

  nameInput.value = "";
  priceInput.value = "";

  saveItems();
  render();
});

/* Enter 키로 추가 */
priceInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

/* 초기 실행 */
render();
