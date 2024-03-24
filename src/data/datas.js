

// datas.js
const Datas = [];

function addData(data) {
    Datas.push(data);
}

function editData(updatedData) {
    const index = Datas.findIndex(item => item.id === updatedData.id);
    if (index !== -1) {
        Datas[index] = updatedData;
    }
}

export { Datas, addData, editData };