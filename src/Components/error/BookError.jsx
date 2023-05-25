import cont from "./styles.module.css"

const BookError = () => {

    //javascript
    // const retryButton = document.querySelector('.retry-button');
    // retryButton.addEventListener('click', function () {
    //     retryButton.disabled = true;
    //     retryButton.innerText = 'Подождите...';
    //     setTimeout(function () {
    //         retryButton.innerText = 'Повторить';
    //         retryButton.disabled = false;
    //     }, 2000);
    // });

    return (
        <div class={cont.box}>Error</div>
    )
}

export default BookError;