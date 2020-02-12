import React from "react";

import "./Poczekalnia.css";

const Poczekalnia = () => {
  return (
    <div className="Poczekalnia">
      <button>New game</button>
      <table>
        <thead>
          <tr>
            <td>Nazwa gry</td>
            <td>Gracz 1</td>
            <td>Gracz 2</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>aa</td>
            <td>a2a</td>
            <td>a2a</td>
            <td>
              <a>Dołącz</a>
            </td>
          </tr>
          <tr>
            <td>aa</td>
            <td>a2a</td>
            <td>a2a</td>
            <td>
              <a>Dołącz</a>
            </td>
          </tr>
          <tr>
            <td>aa</td>
            <td>a2a</td>
            <td>a2a</td>
            <td>
              <button>Dołącz</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Poczekalnia;
