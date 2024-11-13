import { fetchCurrencyRates } from "./api.js";

function updateCurrencyDisplay() {
    fetchCurrencyRates().then((currencyRates) => {
        const currencyList = document.getElementById("currency-list");
        const parentSection = document.querySelector(".currency");
        currencyList.innerHTML = "";

        currencyRates.forEach((currency) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${currency.code}: ${currency.rate.toFixed(2)}`;
            listItem.classList.add("currency__item");
            currencyList.appendChild(listItem);
        });
		const detail = document.createElement("div");
		detail.textContent = "Update every 15 minutes";
		detail.classList.add("currency__detail");
		parentSection.appendChild(detail);
    });
}

updateCurrencyDisplay();
setInterval(updateCurrencyDisplay, 900000);
