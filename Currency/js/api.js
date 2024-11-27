const apiKey = "";
const baseCurrency = "RUB";

const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;


const currencies = ["USD", "EUR", "GBP", "JPY", "CNY", "CHF"];

export async function fetchCurrencyRates() {
    const loader = document.getElementById("loader");
    const currencyList = document.getElementById("currency-list");
	const errorElement = document.getElementById("error");

    loader.style.display = "block";
    currencyList.style.display = "none";

    try {
        const response = await axios.get(apiUrl);
        const rates = response.data.conversion_rates;
        return currencies.map((code) => ({
            code,
            rate: rates[code],
        }));
    } catch (error) {
		errorElement.textContent = error.message;
		errorElement.classList.add("currency__error");
        return [];
    } finally {
        loader.style.display = "none";
        currencyList.style.display = "flex";
    }
}
