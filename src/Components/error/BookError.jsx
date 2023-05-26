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
        <>
            <div className={cont.box}>Error</div>
            <h1 className={cont.mmm}>сваливай отсюда <br /> 404</h1>
        </>
    )
}

export default BookError;