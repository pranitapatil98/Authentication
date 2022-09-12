import { render, screen } from '@testing-library/react';
import App from './App';
import {shallow} from "enzyme";



// test("Login present or not",()=>{
//   const component=shallow(<App/>)
//   const LoginExist =component.find("Login").exists()
//   expect( LoginExist ).toBe(true);
// })