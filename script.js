const addDocument = document.getElementById("addDataNew");
const bg = document.getElementById("bg");
const display  = document.querySelector(".history-pengeluaran");
const form = document.getElementById("formData");
const judulInput = document.getElementById("judulInput");
const pengeluaranInput = document.getElementById("pengeluaranInput");
const totalPengeluaran = document.getElementById("totalPengeluaran");
const totalData = document.getElementById("totalData");
const trash = document.getElementById("trash");

let dataList = [];
let pengeluaranKeseluruhan = 0;

addDocument.addEventListener("click", ()=>{
    bg.style.display = "flex";
})

bg.addEventListener("click", (e) => {
  // Hanya sembunyikan jika yang diklik adalah background-nya, bukan form-nya
  if (e.target.id === "bg") {
    bg.style.display = "none";
  }
});


function addData(judul, pengeluaran){
  const data = {
    judulData : judul,
    pengeluaranData : pengeluaran
  }
  pengeluaranKeseluruhan += parseInt(data.pengeluaranData)
  dataList.push(data)
}

// addData("bakso", 1000)
// addData("okem", 1000)

// console.log(dataList)


function displayData(){
  let dataContent = "";
  console.log("apa");
  dataList.forEach((data, index)=>{
    dataContent += `
      <div
          class="draft flex justify-between items-center min-w-full bg-white p-2 rounded-lg poppins-medium text-[0.8rem]">
          <h1>${data.judulData}</h1>
          <h1>${data.pengeluaranData}</h1>
          <button id="trash"  class="delete-btn" data-index="${index}">
            <img src="assets/trash.svg" alt="hapus" width="20rem" style="pointer-events: none;">
          </button>
        </div>
    `
  })

  display.innerHTML = dataContent;
  totalData.innerHTML = dataList.length
  totalPengeluaran.innerHTML = `Rp ${pengeluaranKeseluruhan}`

}

// displayData()
form.addEventListener("submit", (event)=>{
  event.preventDefault();

  const judul = judulInput.value
  const pengeluaran = pengeluaranInput.value

  addData(judul, pengeluaran);
  displayData();

  judulInput.value = "";
  pengeluaranInput.value = "";
  bg.style.display = 'none';

})

display.addEventListener("click", (e)=>{

  if(e.target.id == "trash"){
    const index = e.target.getAttribute("data-index");

    pengeluaranKeseluruhan -= Number(dataList[index].pengeluaranData);
    
    dataList.splice(index, 1);
    
    displayData();

  }

})
