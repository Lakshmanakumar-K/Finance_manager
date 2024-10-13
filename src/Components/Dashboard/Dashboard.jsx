import styles from "./Dashboard.module.css"

const Dashboard = () => {

    return (<>
        <div className={styles.dashboard_card}>
            <div style={{ border: "1px solid blue", width: "20%", height: "15vh", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h3>Total Income</h3>
                <i className="fa fa-inr" aria-hidden="true">&nbsp;<span style={{ color: "green" }}>500000</span></i>
            </div>
            <div style={{ border: "1px solid blue", width: "20%", height: "15vh", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h3>Total Expense</h3>
                <i className="fa fa-inr" aria-hidden="true">&nbsp;<span style={{ color: "green" }}>500000</span></i>
            </div>
            <div style={{ border: "1px solid blue", width: "20%", height: "15vh", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h3>Total Savings</h3>
                <i className="fa fa-inr" aria-hidden="true">&nbsp;<span style={{ color: "green" }}>500000</span></i>
            </div>
            <div style={{ border: "1px solid blue", width: "20%", height: "15vh", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h3>Total Investment</h3>
                <i className="fa fa-inr" aria-hidden="true">&nbsp;<span style={{ color: "green" }}>500000</span></i>
            </div>
        </div>
        <div className={styles.chart_graph}>
            <div style={{ border: "1px solid green", height: "400px", width: "50%" }}>chart coming soon....</div>
            <div style={{ border: "1px solid green", height: "400px", width: "50%" }}>graph coming soon....</div>
        </div>
    </>)
}
export default Dashboard;