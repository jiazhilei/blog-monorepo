import { Spin } from "antd";
import { Suspense } from "react";
import {RouterProvider} from 'react-router-dom'
import router from "./router";
const App = () => {
  return <Suspense fallback={<Spin spinning tip="加载中..." />}>
      <RouterProvider router={router} />
    </Suspense>
};

export default App;
