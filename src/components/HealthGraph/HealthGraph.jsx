import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { bodyFat } from '../../data/bodyFat';

const HealthGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={315}>
      <LineChart
        width={700}
        height={300}
        data={bodyFat}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid stroke="#777777" horizontal={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="weight"
          stroke="#ffcc21"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="bodyFat" stroke="#8fe9d0" />
      </LineChart>

    </ResponsiveContainer>
  );
}

export default HealthGraph;
