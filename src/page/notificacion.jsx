import React, { useState } from "react";

const Notificacion = () => {
  const [data, setData] = useState([
    { dni: '12345678', title: 'Thesis Title 1', comment: 'Pending review' },
    { dni: '87654321', title: 'Thesis Title 2', comment: 'Requires edits' },
    // Add more data objects as needed
  ]);

  const handleReviewButtonClick = (rowIndex) => {
    alert(`Review button clicked for row ${rowIndex + 1}`);
    // Add logic to handle the review button click, e.g., open a popup or modal
  };

  return (
    <div className="notification-container">
      <div className="notification-header">Notificaciones</div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Numero</th>
            <th>DNI</th>
            <th>Titulo de Tesis</th>
            <th>Comentario</th>
            <th>Revisar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.dni}</td>
              <td>{row.title}</td>
              <td>{row.comment}</td>
              <td>
                <button
                  className="review-button"
                  onClick={() => handleReviewButtonClick(index)}
                >
                  Revisar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Notificacion;
