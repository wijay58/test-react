import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Expenses from './routes/expenses';
import Invoice from './routes/invoice';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { BrowserRouter,Routes,Route } from "react-router-dom";

const render = function() {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route path="/expenses" element={<Expenses />} >
            <Route
              index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Select an invoice</p>
                  </main>
                }
              />
              <Route path=":expenseId" element={<Invoice />} />
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render();
store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
