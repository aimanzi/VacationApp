import { Bar } from "react-chartjs-2";
import React from "react";

export const BarChart = ({ chartData }) => {
    return (
        <div>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Cryptocurrency prices"
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    }
                }}
            />
        </div>
    );
};