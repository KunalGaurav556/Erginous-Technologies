import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import RecipeReviewCard from './Card'
import InputData from './InputData';
import { useContext } from 'react';
import { data1 } from './InputData';



const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
  },
];



// const allData = useContext(dataContext);
// console.log(allData);


export default function DashboardLayoutBasic(props) {

  const { window } = props;



  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
   <>
    
    {
      // console.log(name)
    }
    <AppProvider
      navigation={NAVIGATION}
    >     
      <DashboardLayout>
        <PageContainer >
        <InputData/>
          <Grid container spacing={1} style={{border:'2px solid red',display:'flex',justifyContent:"space-around",gap:'2rem'}}>          
            <RecipeReviewCard/>
            <RecipeReviewCard/>
            <RecipeReviewCard/>
            <RecipeReviewCard/>
            {/* <Dummy/> */}
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
   </>
  );
}