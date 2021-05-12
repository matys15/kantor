{
    const dolarForm = document.querySelector(".js-dolar");
    const euroForm = document.querySelector(".js-euro");
    const funtForm = document.querySelector(".js-funt");

    const init = () => {
        const zlotowka = document.querySelector(".js-PLN");
        const formElement = document.querySelector(".js-form");
        zlotowka.focus();
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            exchange();
        });
        

    const exchange = () => {

            const PLN = zlotowka.value;
            const dolar = PLN / 3.789;
            const euro = PLN / 4.53235;
            const funt = PLN / 5.2231237;

            dolarForm.innerText = dolar.toFixed(2);
            euroForm.innerText = euro.toFixed(2);
            funtForm.innerText = funt.toFixed(2);

        }

    }
    init();

}