
import { useSelector } from 'react-redux';
import Dashboard from './Dashboard';
import SuperUserDashboard from './SuperuserDashboard';

const SUPER_USER = 'superuser'
function DashboardPage() {
  const {
    userInfo,
  } = useSelector((data) => data.dashBoardData);
  const role = userInfo?.Items[0]?.role?.S;
  // const role = SUPER_USER;
  if (role === 'superuser') {
    return <SuperUserDashboard />;
  }
  return <Dashboard />;
}

export default DashboardPage;
