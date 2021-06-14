import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models:{
    transactions: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Freelancer de websit',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12')
        },
        {
          id: 2,
          title: 'Aluguel de sala comercial',
          type: 'withdraw',
          category: 'Empresa',
          amount: 2000,
          createdAt: new Date('2021-04-22')
        }
      ]
    });
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions',() =>{
      return this.schema.all('transactions');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return this.schema.create('transactions', data);
    });

  }
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
