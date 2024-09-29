document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("chemicalTableBody");
  let selectedRow = null;

  const chemicals = [
    {
      id: 1,
      ChemicalName: "Ammonium Persulfate",
      Vendor: "LG Chem",
      Density: 3525.92,
      Viscosity: 60.63,
      Packaging: "Bag",
      PackSize: 100.0,
      Unit: "kg",
      Quantity: 6495.18,
    },
    {
      id: 2,
      ChemicalName: "Caustic Potash",
      Vendor: "Formosa",
      Density: 3172.15,
      Viscosity: 48.22,
      Packaging: "Bag",
      PackSize: 100.0,
      Unit: "kg",
      Quantity: 8751.9,
    },
    {
      id: 3,
      ChemicalName: "Dimethylaminopropylamino",
      Vendor: "LG Chem",
      Density: 8435.37,
      Viscosity: 12.62,
      Packaging: "Barrel",
      PackSize: 75.0,
      Unit: "L",
      Quantity: 5964.61,
    },
    {
      id: 4,
      ChemicalName: "Mono Ammonium Phosphate",
      Vendor: "Sinopec",
      Density: 1597.65,
      Viscosity: 76.51,
      Packaging: "Bag",
      PackSize: 105.0,
      Unit: "kg",
      Quantity: 8183.73,
    },
    {
      id: 5,
      ChemicalName: "Ferric Nitrate",
      Vendor: "DowDuPont",
      Density: 364.04,
      Viscosity: 14.9,
      Packaging: "Bag",
      PackSize: 105.0,
      Unit: "kg",
      Quantity: 4154.33,
    },
    {
      id: 6,
      ChemicalName: "n-Pentane",
      Vendor: "Sinopec",
      Density: 4535.26,
      Viscosity: 66.76,
      Packaging: "N/A",
      PackSize: "N/A",
      Unit: "t",
      Quantity: 6272.34,
    },
    {
      id: 7,
      ChemicalName: "Glycol Ether PM",
      Vendor: "LG Chem",
      Density: 6495.18,
      Viscosity: 72.12,
      Packaging: "Bag",
      PackSize: 250.0,
      Unit: "kg",
      Quantity: 8749.54,
    },
    {
      id: 8,
      ChemicalName: "Boric Acid",
      Vendor: "Formosa",
      Density: 1450.32,
      Viscosity: 22.75,
      Packaging: "Bag",
      PackSize: 200.0,
      Unit: "kg",
      Quantity: 6589.14,
    },
    {
      id: 9,
      ChemicalName: "Sulfuric Acid",
      Vendor: "LG Chem",
      Density: 1845.98,
      Viscosity: 56.24,
      Packaging: "Drum",
      PackSize: 150.0,
      Unit: "L",
      Quantity: 9521.43,
    },
    {
      id: 10,
      ChemicalName: "Sodium Hydroxide",
      Vendor: "DowDuPont",
      Density: 950.3,
      Viscosity: 12.14,
      Packaging: "Bag",
      PackSize: 300.0,
      Unit: "kg",
      Quantity: 3410.72,
    },
    {
      id: 11,
      ChemicalName: "Ethanol",
      Vendor: "Formosa",
      Density: 785.56,
      Viscosity: 45.75,
      Packaging: "Barrel",
      PackSize: 100.0,
      Unit: "L",
      Quantity: 7541.2,
    },
    {
      id: 12,
      ChemicalName: "Ammonia",
      Vendor: "Sinopec",
      Density: 865.22,
      Viscosity: 20.35,
      Packaging: "Cylinder",
      PackSize: 500.0,
      Unit: "kg",
      Quantity: 8452.34,
    },
    {
      id: 13,
      ChemicalName: "Hydrochloric Acid",
      Vendor: "LG Chem",
      Density: 1197.43,
      Viscosity: 34.64,
      Packaging: "Drum",
      PackSize: 50.0,
      Unit: "L",
      Quantity: 9121.45,
    },
    {
      id: 14,
      ChemicalName: "Methanol",
      Vendor: "DowDuPont",
      Density: 792.15,
      Viscosity: 25.67,
      Packaging: "Barrel",
      PackSize: 250.0,
      Unit: "L",
      Quantity: 6724.51,
    },
    {
      id: 15,
      ChemicalName: "Nitric Acid",
      Vendor: "Formosa",
      Density: 1437.54,
      Viscosity: 18.94,
      Packaging: "Drum",
      PackSize: 120.0,
      Unit: "L",
      Quantity: 8254.62,
    },
  ];
  function loadTableData() {
    tableBody.innerHTML = "";
    chemicals.forEach((chem, index) => {
      const row = tableBody.insertRow();
      row.innerHTML = `
      <td>${chem.id}</td>
      <td><input type="text" value="${chem.name || ""}"></td>
      <td><input type="text" value="${chem.vendor || ""}"></td>
      <td><input type="number" value="${chem.density || 0}"></td>
      <td><input type="number" value="${chem.viscosity || 0}"></td>
      <td><input type="text" value="${chem.packaging || ""}"></td>
      <td><input type="number" value="${chem.packSize || 0}"></td>
      <td><input type="text" value="${chem.unit || ""}"></td>
      <td><input type="number" value="${chem.quantity || 0}"></td>
  `;
      row.addEventListener("click", () => selectRow(row));
    });
  }

  // Sort table
  function sortTable(columnIndex) {
    let rows = Array.from(tableBody.rows);
    let sortedRows = rows.sort((a, b) => {
      let valA = a.cells[columnIndex].innerText.toLowerCase();
      let valB = b.cells[columnIndex].innerText.toLowerCase();
      return valA > valB ? 1 : valA < valB ? -1 : 0;
    });
    sortedRows.forEach((row) => tableBody.appendChild(row));
  }

  // Select row
  function selectRow(row) {
    if (selectedRow) {
      selectedRow.classList.remove("selected");
    }
    row.classList.add("selected");
    selectedRow = row;
  }

  document.getElementById("addRow").addEventListener("click", () => {
    const newId = chemicals.length + 1;
    const newRow = {
      id: newId,
      name: "New Chemical",
      vendor: "New Vendor",
      density: 0,
      viscosity: 0,
      packaging: "New Packaging",
      packSize: 0,
      unit: "kg",
      quantity: 0,
    };
    chemicals.push(newRow);
    loadTableData();
  });

  document.getElementById("deleteRow").addEventListener("click", () => {
    if (selectedRow) {
      const rowIndex = selectedRow.rowIndex - 1;
      chemicals.splice(rowIndex, 1);
      loadTableData();
      selectedRow = null;
    }
  });

  document.getElementById("moveUp").addEventListener("click", () => {
    if (selectedRow && selectedRow.rowIndex > 1) {
      const rowIndex = selectedRow.rowIndex - 1;
      [chemicals[rowIndex], chemicals[rowIndex - 1]] = [
        chemicals[rowIndex - 1],
        chemicals[rowIndex],
      ];
      loadTableData();
    }
  });

  document.getElementById("moveDown").addEventListener("click", () => {
    if (selectedRow && selectedRow.rowIndex < chemicals.length) {
      const rowIndex = selectedRow.rowIndex - 1;
      [chemicals[rowIndex], chemicals[rowIndex + 1]] = [
        chemicals[rowIndex + 1],
        chemicals[rowIndex],
      ];
      loadTableData();
    }
  });

  document
    .getElementById("refreshTable")
    .addEventListener("click", loadTableData);

  document.getElementById("saveTable").addEventListener("click", () => {
    console.log("Table saved", chemicals);
  });

  loadTableData();
});
