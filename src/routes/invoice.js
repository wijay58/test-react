import { useParams } from "react-router-dom";
import { getInvoice } from "../hardcoded";
export default function Invoice() {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.expenseId));
    return (
        <main style={{ padding: "1rem" }}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
        </main>
    );
};