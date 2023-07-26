import React from 'react'
import SideBar from '../../components/dashboard/home/SideBar'
import TopNav from '../../components/dashboard/home/TopNav'
import Balance from '../../components/dashboard/home/balance/Balance'

const Dashboard = () => {
  return (
    <>
      <main>
        <div className='main-dashboard-section h-screen bg-slate-100 w-full lg:w-[calc(100%-25%)] float-right'>
          <TopNav />
          <Balance />
        </div>
        <aside className='lg:block'>
          <SideBar />
        </aside>
      </main>
    </>
  )
}

export default Dashboard
