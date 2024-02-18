import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GaugeChart from "react-gauge-chart";
import { Chart } from "react-google-charts";
import styled from "styled-components";
import LogsTable from "./LogsTable";
import CardDashboard from "./CardDashboard";

const RightDashboard = () => {
  const [active, setActive] = useState("analytics");
  const [data, setData] = useState([]);
  const [logsData, setLogsData] = useState([]);
  const [cpuUsage, setCpuUsage] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [timeSeries, setTimeSeries] = useState([
    ["Time", "Rx bytes", "Tx bytes"],
  ]);
  const [cputimeSeries, setCpuTimeSeries] = useState([
    [{ type: "date", label: "Day" }, "CPU usage", "Memory usage"],
  ]);

  const navigate = useNavigate();

  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(`/container/${id}`);
      const data = await response.json();
      setData(data);
      setCpuUsage(
        data.stats.cpu_stats.cpu_usage.total_usage /
          data.stats.cpu_stats.system_cpu_usage
      );
      setMemoryUsage(
        data.stats.memory_stats.usage / data.stats.memory_stats.limit
      );
      timeSeries.length > 30
        ? setTimeSeries(timeSeries.splice(1, 1))
        : setTimeSeries([
            ...timeSeries,
            [
              new Date(),
              data.stats.networks.eth0.rx_bytes,
              data.stats.networks.eth0.tx_bytes,
            ],
          ]);
      cputimeSeries.length > 30
        ? setCpuTimeSeries(cputimeSeries.splice(1, 1))
        : setCpuTimeSeries([
            ...cputimeSeries,
            [
              new Date(),
              data?.stats?.cpu_stats?.cpu_usage?.total_usage,
              data?.stats?.memory_stats?.usage,
            ],
          ]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchLogs = async () => {
    const eventSource = new EventSource(`/logs/${id}`);

    eventSource.onmessage = (event) => {
      // Parse and update logs state
      setLogsData((prevLogs) => [...prevLogs, event.data]);
    };

    eventSource.onerror = (error) => {
      console.error('Error with EventSource:', error);
      eventSource.close();
    };
  };


  useEffect(() => {
    fetchData();
    fetchLogs();
  }, [data]);

  const options = {
    title: "Time series data for Networking",
    hAxis: { title: "Time", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "70%", height: "70%" },
  };

  const options2 = {
    chart: {
      title: "CPU usage vs Memory usage",
    },
    chartArea: { width: "70%", height: "70%" },
    series: {
      // Gives each series an axis name that matches the Y-axis below.
      0: { axis: "CPU usage" },
      1: { axis: "Memory usage" },
    },
    axes: {
      // Adds labels to each axis; they don't have to match the axis names.
      y: {
        Temps: { label: "" },
        Daylight: { label: "" },
      },
    },
  };

  const startContainer = async () => {
    try {
      const response = await fetch(`/start/${id}`);
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const stopContainer = async () => {
    try {
      await fetch(`/stop/${id}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteContainer = async () => {
    try {
      await fetch(`/delete/${id}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Wrapper>
      <div className="title">
        <h3>Overview</h3>
        <div className="overview-container">
          <div className="card"><CardDashboard e1={"PId/T"} e2={data?.stats?.pids_stats?.current} e3={""} e4={"blue"}/></div>
          
          {/* <div className="card">
            {data?.stats?.pids_stats?.current ? (
              <>
                <div className="pid_value">
                  {data?.stats?.pids_stats?.current}
                </div>
                <div className="pid">PId/T</div>
              </>
            ) : (
              <></>
            )}
          </div> */}
          <div className="gauge-container">
            <div className="gauge">
              <GaugeChart
                id="gauge-chart5"
                nrOfLevels={200}
                arcsLength={[0.35, 0.35, 0.3]}
                colors={["#5BE12C", "#F5CD19", "#EA4228"]}
                textColor="black"
                percent={cpuUsage}
                arcPadding={0.01}
                animate={false}
              />
              <h3>CPU Usage</h3>
            </div>
            <div className="gauge">
              <GaugeChart
                id="gauge-chart5"
                nrOfLevels={200}
                textColor="black"
                arcsLength={[0.35, 0.35, 0.3]}
                colors={["#5BE12C", "#F5CD19", "#EA4228"]}
                percent={memoryUsage}
                arcPadding={0.01}
                animate={false}
              />
              <h3>Memory Usage</h3>
            </div>
          </div>
        </div>
      </div>

      <>
        <div className="tableTitle">
          <div className="pills">
            <div
              className={active === "analytics" ? "active pill" : "pill"}
              onClick={() => {
                setActive("analytics");
              }}
            >
              Analytics
            </div>
            <div
              className={active === "logs" ? "active pill" : "pill"}
              onClick={() => {
                setActive("logs");
              }}
            >
             Logs
            </div>
          </div>
          <div className="buttons">
            {data?.state === "running" ? (
              <button
                onClick={() => {
                  stopContainer();
                  setData((prev) => ({ ...prev, State: "exited" }));
                  window.location.reload();
                }}
                className="stop button"
              >
                Stop
              </button>
            ) : (
              <button
                onClick={() => {
                  startContainer();
                  // navigate(`/admin/${id}`);
                  setData((prev) => ({ ...prev, State: "running" }));
                  window.location.reload();
                }}
                className="start button"
              >
                Start
              </button>
            )}
            <button
              onClick={() => {
                deleteContainer();
                navigate("/");
              }}
              className="delete button"
            >
              Delete
            </button>
          </div>
        </div>

        {active === "analytics" ? (
          <div className="charts">
            {data?.stats?.cpu_stats?.cpu_usage?.total_usage ? (
              <Chart
                chartType="Line"
                width="100%"
                height="400px"
                data={cputimeSeries}
                options={options2}
              />
            ) : (
              <></>
            )}
            {data?.stats?.memory_stats?.usage ? (
              <Chart
                chartType="AreaChart"
                width="100%"
                height="400px"
                data={timeSeries}
                options={options}
              />
            ) : (
              <></>
            )}
          </div>
        ) : (
          <LogsTable TableData={logsData}/>
        )}
      </>
    </Wrapper>
  );
};

export default RightDashboard;
const Wrapper = styled.section`
  min-height: calc(100vh - 8rem);
  padding: 4rem 3rem;
  /* background-color: #EEEBF6; */
  background-color: #fafafa;
  .title {
    margin-top: 6rem;

    .overview-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .card{
        width: 30%;
      }
      // .card {
      //   background: #0e4f82;
      //   color: white;
      //   border-radius: 1rem;

      //   .pid_value {
      //     font-size: 2.5rem;
      //     border-radius: 1rem;
      //     padding: 1rem 2rem;
      //     background: #357ec7;
      //   }

      //   .pid {
      //     padding: 1rem 2rem;
      //     font-size: 1.5rem;
      //     text-align: center;
      //   }
      // }

      .gauge-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .gauge {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }

    h3 {
      color: var(--Black-12, #1a181e);
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 28px; /* 140% */
    }
    .selection {
      cursor: pointer;
      select {
        cursor: pointer;
        border-radius: 4px;
        border: 1px solid var(--Black-85, #d9d9d9);
        background: var(--Black-100, #fff);
        width: 137px;
        height: 36px;
        color: var(--Black-30, #4d4d4d);
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        padding: 0.5rem;
      }
      option {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .cards {
    width: 100%;
    padding: 0rem 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
  .tableTitle {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 2rem;
    padding: 3rem 5rem 2rem 0rem;

    h3 {
      color: var(--Black-12, #1a181e);
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 28px; /* 140% */
    }
    .pills {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      .pill {
        border-radius: 40px;
        background: var(--Black-90, #e6e6e6);
        display: flex;
        padding: 6px 16px;
        align-items: center;
        gap: 10px;
        font-size: 1.75rem;
        color: #808080;
        cursor: pointer;
      }
      .active {
        background-color: #146eb4;
        color: white;
      }
    }

    .buttons {
      display: flex;
      gap: 2rem;
      align-items: center;

      .button {
        border: none;
        border-radius: 10px;
        background: #357ec7;
        display: flex;
        padding: 6px 16px;
        align-items: center;
        gap: 10px;
        font-size: 1.75rem;
        cursor: pointer;
        color: white;
      }

      .delete {
        background-color: red;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .cards {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
`;
