import data from "./demo-json-data.json" assert { type: "json" };

const tableDiv = document.getElementById("table");

// table structures.
const getSingleTableData = (tableData) => {
  return `<table border = 1>
    <thead>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Class</th>
        <th>Marks</th>
        <th>Passing</th>
        <th>Email</th>
    </tr>
    </thead>
    <tbody>
    ${
      tableData &&
      tableData
        .map((item) => {
          return `<tr>
                <td>${item.id}</td>
                <td><span><img src="${item.img_src}" /></span> ${item.first_name} ${item.last_name}</td>
                <td>${item.gender}</td>
                <td>${item.class}</td>
                <td>${item.marks}</td>
                <td>${item.passing}</td>
                <td>${item.email}</td>
            </tr>`;
        })
        .join("")
    }
    </tbody>
    </table>`;
};
// gender-wise table structure
const getTwoTableData = (maleTabledata, femaleTableData) => {
  return `<table border = 1>
    <thead>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Class</th>
        <th>Marks</th>
        <th>Passing</th>
        <th>Email</th>
    </tr>
    </thead>
    <tbody>
    ${
      maleTabledata &&
      maleTabledata
        .map((item) => {
          return `<tr>
                <td>${item.id}</td>
                <td><span><img src="${item.img_src}" /></span> ${item.first_name} ${item.last_name}</td>
                <td>${item.gender}</td>
                <td>${item.class}</td>
                <td>${item.marks}</td>
                <td>${item.passing}</td>
                <td>${item.email}</td>
            </tr>`;
        })
        .join("")
    }
    </tbody>
    </table><table border = 1>
    <thead>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Class</th>
        <th>Marks</th>
        <th>Passing</th>
        <th>Email</th>
    </tr>
    </thead>
    <tbody>
    ${
      femaleTableData &&
      femaleTableData
        .map((item) => {
          return `<tr>
                <td>${item.id}</td>
                <td><span><img src="${item.img_src}" /></span> ${item.first_name} ${item.last_name}</td>
                <td>${item.gender}</td>
                <td>${item.class}</td>
                <td>${item.marks}</td>
                <td>${item.passing}</td>
                <td>${item.email}</td>
            </tr>`;
        })
        .join("")
    }
    </tbody>
    </table>`;
};

// buttons
const action_btn_div = document.getElementById("action-btn");
let btn_arr = [
  {
    title: "Sort A->Z",
    id: "sortAsc",
    handleClick: () => {
      //   e.preventDefault();
      const sortedData = data.sort((a, b) => {
        let aName = a.first_name + a.last_name;
        let bName = b.first_name + b.last_name;
        return aName.localeCompare(bName);
      });
      tableDiv.innerHTML = getSingleTableData(sortedData);
    },
  },
  {
    title: "Sort Z->A",
    id: "sortDsc",
    handleClick: () => {
      //   e.preventDefault();
      data.sort((a, b) => {
        let aName = a.first_name + a.last_name;
        let bName = b.first_name + b.last_name;
        return bName.localeCompare(aName);
      });
      tableDiv.innerHTML = getSingleTableData(data);
    },
  },
  {
    title: "Sort By Marks",
    id: "sortMarks",
    handleClick: () => {
      //   e.preventDefault();
      data.sort((a, b) => {
        return a.marks - b.marks;
      });
      tableDiv.innerHTML = getSingleTableData(data);
    },
  },
  {
    title: "Sort By Passing",
    id: "sortPassing",
    handleClick: () => {
      //   e.preventDefault();
      const newArry = data.filter((item) => item.passing);
      tableDiv.innerHTML = getSingleTableData(newArry);
    },
  },
  {
    title: "Sort By Class",
    id: "sortClass",
    handleClick: () => {
      //   e.preventDefault();
      data.sort((a, b) => {
        return a.class - b.class;
      });
      tableDiv.innerHTML = getSingleTableData(data);
    },
  },
  {
    title: "Sort By Gender",
    id: "sortGender",
    handleClick: () => {
      //   e.preventDefault();
      const maleTable = data.filter((item) => item.gender === "Male");
      const femaleTable = data.filter((item) => item.gender === "Female");
      tableDiv.innerHTML = getTwoTableData(maleTable, femaleTable);
    },
  },
];

let actionable_btn_string = `${btn_arr
  .map((item) => {
    return `<button id = ${item.id}>${item.title}</button>`;
  })
  .join("")}`;

action_btn_div.innerHTML = actionable_btn_string;

btn_arr.forEach((item) => {
  const eventListner = document.getElementById(item.id);
  console.log("event", eventListner);
  eventListner.addEventListener("click", item.handleClick);
});

let tableString = "";

tableString = getSingleTableData(data);

tableDiv.innerHTML = tableString;

// search
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredStudents = data.filter(
    (student) =>
      student.first_name.toLowerCase().includes(searchTerm) ||
      student.last_name.toLowerCase().includes(searchTerm) ||
      student.email.toLowerCase().includes(searchTerm)
  );
  tableDiv.innerHTML = getSingleTableData(filteredStudents)
});
