let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        xhr.status === 200 && console.log(xhr.responseText);
    }
}
xhr.open(
    "POST",
    "http://localhost:3000",
  
);
xhr.send()