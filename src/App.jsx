import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ForumIcon from '@mui/icons-material/Forum';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import faker from 'faker';
import './App.css'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
  );
  
ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Earnings Overview',
    },
  },
};

const labels = ['January', 'March',  'May', 'June', 'July' , 'September'  ,'November' ];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Earnings ',
      data: labels.map(() => faker.datatype.number({ min: 10000, max: 40000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function App(){

  return(
    <div>
      <Cards/>
      <div className='Main'>
      <Chart/>
      <RoundChart/>
      </div>
    </div>
  )
}

export function Chart() {
  return(
    <div className='App'> 
      <Line options={options} data={data} /> 
    </div>
  ) 
}

function Cards(){
  const data = [
    {
      earnings : "EARNINGS(MONTHLY)",
      amount : "$40000",
      icon :  <CalendarTodayIcon/>
    },
    {
      earnings : "EARNINGS(ANNUAL)",
      amount : "$215,000",
      icon : <AttachMoneyIcon/>
    },
    {
      earnings : "TASKS",
      amount : "50%",
      icon : <CalendarMonthIcon/>
    },
    {
      earnings : "PENDING REQUESTS",
      amount : "18",
      icon : <ForumIcon/>
    },
  ]
  return(
    <div className='cards'>
         {data.map((mv)=> <Card earnings={mv.earnings} amount={mv.amount} icon={mv.icon}/>)}
    </div>
  )
}

export function Card({earnings,amount,icon}){
  return(
          <div className='Card'>
      <div>
      <p><strong>{earnings}</strong></p>
      <h3>{amount}</h3>
      </div>
      <div>
        {icon}
      </div>
          </div>
  )
}

export const source = {
  labels: ['Social', 'Referral', 'Direct'],
  datasets: [
    {
      fill : true,
      label: '# of Votes',
      data: [50,30,200],
      width: '30px',
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
      ],
      borderColor: [
        'white',
        'white',
        'white',
      ]
    },
  ],
};

export function RoundChart() {
  return(
    <div className='RoundChart'>
        <Doughnut data={source} />
    </div>
  )
} 


