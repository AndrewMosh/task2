const apiUrl = "https://api.exchangeratesapi.io/v1/latest";
const apiKey = "b966dd3434ab1fcf337966d6cda1c0d3";

const currencies = ["USD", "EUR", "GBP", "JPY", "CNY", "CHF"];

export async function fetchCurrencyRates() {
    const loader = document.getElementById("loader");
    const currencyList = document.getElementById("currency-list");
	const errorElement = document.getElementById("error");

    loader.style.display = "block";
    currencyList.style.display = "none";

    // в бесплатной версии API базовая валюта  только EUR и кол-во запросов в месяц ограничено
    try {
        const response = await axios.get(apiUrl, {
            params: { access_key: apiKey },
        });
        const rates = response.data.rates;
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
