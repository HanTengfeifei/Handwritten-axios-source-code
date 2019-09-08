import Kaxios from './kaxios';
import axios from 'axios';
import defaultConfig from './InstanceConfig';
console.log(defaultConfig);
let kaxios = new Kaxios(defaultConfig);
//  kaxios = Function.prototype.bind(axios.request, kaxios);
//  kaxios = 
//  console.log(kaxios.get);

export  default kaxios;