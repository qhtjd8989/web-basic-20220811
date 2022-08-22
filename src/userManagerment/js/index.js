let trList = document.querySelectorAll("tr");
const table = document.querySelector("table");
const saveButton = document.querySelector(".save-button");
const inputValue = document.querySelectorAll("input").value;



saveButton.onclick = () => {

    let trNumber = trList.length;
    table.innerHTML += `
            <tr>
                <td>${Number(trNumber) + 1 + "번"}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        `;
        

}