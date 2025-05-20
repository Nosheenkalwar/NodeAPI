const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    try{
        res.json('WELCOME TO HR API');
    }catch(err){
                res.status(500).json({Error:err.message});
    }
});

app.get('/employees',async(req,res)=>{
    try{
        const result = await pool.query('select count(employee_id) from employees');
        res.json(result.rows);
    }catch{
           res.status(500).json({Error:err.message});
    }
});

app.get('/40',async(req,res)=>{
    try{
        const result = await pool.query('select e.employee_id , e.first_name , e.last_name , l.location_id , l.city , c.country_name from employees e join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id join countries c on l.country_id = c.country_id limit 10');
        res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }
});

app.get('/41',async(req,res)=>{
    try{
    const result = await pool.query('select jh.* , e.first_name , e.last_name from job_history jh join employees e on jh.employee_id = e.employee_id limit 10;');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/42',async(req,res)=>{
    try{
    const result = await pool.query('select e.first_name , e.last_name , jh.job_id , jh.start_date , jh.end_date from  employees e join  job_history jh  on   e.employee_id = jh.employee_id limit 10;');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/43',async(req,res)=>{
    try{
    const result = await pool.query('select e.first_name , e.last_name , e.employee_id , jh.job_id , jh.start_date , jh.end_date , d.department_name from  employees e join  job_history jh  on   e.employee_id = jh.employee_id join departments d on e.department_id = d.department_id limit 10; ');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/44',async(req,res)=>{
    try{
    const result = await pool.query('select e.first_name , e.last_name , e.employee_id , jh.job_id , jh.start_date , jh.end_date , d.department_name , l.location_id , l.city from  employees e join  job_history jh  on   e.employee_id = jh.employee_id join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id limit 10; ');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/45',async(req,res)=>{
    try{
    const result = await pool.query('select e.first_name , e.last_name , e.employee_id , jh.job_id , jh.start_date , jh.end_date , c.country_name from  employees e join  job_history jh  on   e.employee_id = jh.employee_id join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id join countries c on l.country_id = c.country_id limit 10; ');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/46',async(req,res)=>{
    try{
    const result = await pool.query('select jh.* , e.first_name , e.last_name , d.department_name from job_history jh join employees e on jh.employee_id = e.employee_id join departments d on  jh.department_id = d.department_id limit 10; ');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/47',async(req,res)=>{
    try{
    const result = await pool.query('select jh.* , e.first_name , e.last_name , j.job_title from job_history jh join employees e on jh.employee_id = e.employee_id join jobs j on  jh.job_id = j.job_id limit 10; ');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/48',async(req,res)=>{
    try{
    const result = await pool.query('select jh.* , e.first_name , e.last_name , j.job_title, d.department_name  from job_history jh join employees e on jh.employee_id = e.employee_id join jobs j on  jh.job_id = j.job_id join departments d on jh.department_id = d.department_id limit 10; ');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/49',async(req,res)=>{
    try{
    const result = await pool.query('select jh.* , e.first_name , e.last_name , j.job_title, l.location_id , l.city  from job_history jh join employees e on jh.employee_id = e.employee_id join jobs j on  jh.job_id = j.job_id join departments d on jh.department_id = d.department_id join locations l on d.location_id = l.location_id limit 10; ');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/50',async(req,res)=>{
    try{
    const result = await pool.query('select jh.* , e.first_name , e.last_name , j.job_title, c.country_id , c.country_name  from job_history jh join employees e on jh.employee_id = e.employee_id join jobs j on  jh.job_id = j.job_id join departments d on jh.department_id = d.department_id join locations l on d.location_id = l.location_id join countries c on l.country_id = c.country_id limit 10; ');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/51',async(req,res)=>{
    try{
    const result = await pool.query('select r.* ,  c.country_name , l.location_id , l.city from regions r join countries c  on r.region_id = c.region_id join locations l  on c.country_id = l.country_id limit 10; ');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/52',async(req,res)=>{
    try{
    const result = await pool.query('select c.* , r.region_name , l.location_id , l.city from countries c join regions r on c.region_id = r.region_id join locations l on c.country_id = l.country_id  limit 10; ');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/53',async(req,res)=>{
    try{
    const result = await pool.query('select l.* , c.country_name , r.region_id , r.region_name from locations l join countries c  on l.country_id = c.country_id join regions r on c.region_id = r.region_id  limit 10; ');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/54',async(req,res)=>{
    try{
    const result = await pool.query('select d.department_id , d.department_name , e.employee_id , e.first_name , l.location_id , l.city from departments d join employees e on d.department_id = e.department_id join locations l on d.location_id = l.location_id  limit 10; ');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/55',async(req,res)=>{
    try{
    const result = await pool.query(' select e.first_name , e.last_name , e.employee_id , d.department_id ,  c.country_name , l.location_id , l.city from  employees e  join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id join countries c on l.country_id = c.country_id limit 10;');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/56',async(req,res)=>{
    try{
    const result = await pool.query(' select e.first_name , e.last_name , e.employee_id , m.manager_id , d.department_id ,  l.location_id , l.city from  employees e join employees m on e.manager_id = m.manager_id join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id  limit 10;');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/57',async(req,res)=>{
    try{
    const result = await pool.query(' select e.first_name , e.last_name , e.employee_id , j.job_title , d.department_id ,  l.location_id , l.city from  employees e join jobs j on e.job_id = j.job_id join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id  limit 10;');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/58',async(req,res)=>{
    try{
    const result = await pool.query(' select e.first_name , e.last_name , m.manager_id , e.employee_id , j.job_title , d.department_id  from  employees e join jobs j on e.job_id = j.job_id join departments d on e.department_id = d.department_id join employees m on e.manager_id = m.manager_id  limit 10;');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/59',async(req,res)=>{
    try{
    const result = await pool.query(' select distinct e.first_name , e.last_name , e.employee_id , m.manager_id , j.job_title , d.department_id ,  l.location_id , l.city from  employees e join jobs j on e.job_id = j.job_id join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id join employees m on e.manager_id = m.manager_id limit 10;');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/60',async(req,res)=>{
    try{
    const result = await pool.query(' select c.country_name from countries c join regions r on c.region_id = r.region_id where r.region_id = 1');
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/61',async(req,res)=>{
    try{
    const result = await pool.query(`select d.department_name from departments d join locations l on d.location_id = 
l.location_id where l.city like 'N%' `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/62',async(req,res)=>{
    try{
    const result = await pool.query(`select  e.first_name , e.last_name , e.department_id , e.commission_pct from 
employees e where e.department_id in (select d.department_id from departments d join 
employees m on d.manager_id = m.employee_id where m.commission_pct > 0.15) limit 10; 
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/63',async(req,res)=>{
    try{
    const result = await pool.query(` select j.job_title from jobs j  join employees e on j.job_id = e.job_id where 
e.employee_id in (select distinct manager_id from employees where manager_id is not 
null)limit 10 
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/64',async(req,res)=>{
    try{
    const result = await pool.query(` select l.postal_code , r.region_name from locations l join countries c on l.country_id = 
c.country_id join regions r on c.region_id = r.region_id where r.region_name like '%Asia%'
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/65',async(req,res)=>{
    try{
    const result = await pool.query(` select  d.department_name , e.first_name , e.last_name from departments d join 
employees e on d.department_id = e.department_id where e.commission_pct < (select 
avg(commission_pct) from employees )
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/66',async(req,res)=>{
    try{
    const result = await pool.query(` select j.job_title from jobs j join employees e on j.job_id = e.job_id  where e.salary > 
(select avg(salary) from employees e2 where e2.department_id = e.department_id)
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/67',async(req,res)=>{
    try{
    const result = await pool.query(` select employee_id from employees where department_id is null;
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/68',async(req,res)=>{
    try{
    const result = await pool.query(` select e.first_name , e.last_name from employees e  join job_history jh on 
e.employee_id = jh.employee_id group by e.employee_id , e.first_name , e.last_name having 
count(jh.job_id) > 1
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/69',async(req,res)=>{
    try{
    const result = await pool.query(`  select department_id ,  count(employee_id) from employees group by department_id
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/70',async(req,res)=>{
    try{
    const result = await pool.query(`  select job_id , sum(salary) as "Total Salary" from employees group by job_id
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/71',async(req,res)=>{
    try{
    const result = await pool.query(` select department_id , avg(commission_pct) as "AVG Commssion" from employees 
group by department_id
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/72',async(req,res)=>{
    try{
    const result = await pool.query(` select c.country_name , c.country_id , max(salary) as "Maximum Salary" from 
employees e join departments d on e.department_id = d.department_id join locations l on 
d.location_id = l.location_id join countries c on l.country_id = c.country_id group by 
c.country_id
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/721',async(req,res)=>{
    try{
    const result = await pool.query(`select e.first_name , e.last_name , d.department_name , e.department_id , l.city , 
l.state_province from employees e join departments d on e.department_id = d.department_id 
join locations l on d.location_id = l.location_id where e.first_name like '%z%'
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/73',async(req,res)=>{
    try{
    const result = await pool.query(`select j.job_title , d.department_name , concat(e.first_name , e.last_name) as 
"Full_Name" , jh.start_date from job_history jh join  employees e  on jh.employee_id = 
e.employee_id join departments d on jh.department_id = d.department_id join jobs j on 
jh.job_id = j.job_id where jh.start_date >= '1993-01-01' and jh.end_date <= '1997-08-31'
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/74',async(req,res)=>{
    try{
    const result = await pool.query(` select c.country_name , l.city , count(distinct d.department_id) as "Total departments" 
from employees e join departments d on e.department_id = d.department_id join locations l on 
d.location_id = l.location_id join countries c on l.country_id = c.country_id group by 
c.country_name , l.city  having count(e.employee_id) > 2
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/75',async(req,res)=>{
    try{
    const result = await pool.query(`select concat(e.first_name , e.last_name) as "Full_Name" , j.job_title , jh.start_date , 
jh.end_date from employees e join jobs j on e.job_id = j.job_id join job_history jh on 
e.employee_id = jh.employee_id where e.commission_pct is null;
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/76',async(req,res)=>{
    try{
    const result = await pool.query(` select concat(e.first_name ,' ' ,e.last_name) as "Full_Name" , e.employee_id, 
c.country_name from employees e join departments d on e.department_id = d.department_id 
join locations l on d.location_id = l.location_id join countries c on l.country_id = c.country_id
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/77',async(req,res)=>{
    try{
    const result = await pool.query(`select concat(e.first_name ,' ' ,e.last_name) as "Full_Name" , e.salary , e.department_id 
from employees e where e.salary = (select min(salary) from employees where department_id = 
e.department_id)
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/78',async(req,res)=>{
    try{
    const result = await pool.query(` select e.* from employees e where e.salary = (select max(salary) from employees where 
salary < (select max(salary) from employees where salary < (select max(salary) from 
employees)))
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/79',async(req,res)=>{
    try{
    const result = await pool.query(` select employee_id , first_name ,last_name , salary from employees where salary > 
(select avg(salary) from employees) and department_id in (select distinct department_id from 
employees where first_name like '%J%' or last_name like '%J%')
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});

app.get('/80',async(req,res)=>{
    try{
    const result = await pool.query(`  select e.first_name , e.last_name , e.employee_id , j.job_title , l.city from employees e 
join jobs j on e.job_id = j.job_id join departments d on e.department_id = d.department_id join 
locations l on d.location_id = l.location_id where l.city = 'Toronto'
 `);
    res.json(result.rows);
    }catch{
        res.status(500).json({Error:err.message})
    }

});






app.get('/country',async(req,res)=>{
    try{
        const result = await pool.query('select * from countries');
        res.json(result.rows);
    }catch{
           res.status(500).json({Error:err.message});
    }
});



app.get('/region',async(req,res)=>{
    try{
        const result = await pool.query('select * from regions');
        res.json(result.rows);
    }catch{
           res.status(500).json({Error:err.message});
    }
});

app.get('/tolemp',async(req,res)=>{
    try{
        const result = await pool.query('select count(employee_id) from employees');
        res.json(result.rows);
    }catch{
           res.status(500).json({Error:err.message});
    }
});

app.get('/tolreg',async(req,res)=>{
    try{
        const result = await pool.query('select count(region_id) from regions');
        res.json(result.rows);
    }catch{
           res.status(500).json({Error:err.message});
    }
});

app.get('/tolcountry',async(req,res)=>{
    try{
        const result = await pool.query('select count(country_id) from countries');
        res.json(result.rows);
    }catch{
           res.status(500).json({Error:err.message});
    }
});

app.get('/toldep',async(req,res)=>{
    try{
        const result = await pool.query('select count(department_id) from departments');
        res.json(result.rows);
    }catch{
           res.status(500).json({Error:err.message});
    }
});

app.get('/toljob',async(req,res)=>{
    try{
        const result = await pool.query('select count(job_id) from jobs');
        res.json(result.rows);
    }catch{
           res.status(500).json({Error:err.message});
    }
});

app.get('/tollocation',async(req,res)=>{
    try{
        const result = await pool.query('select count(location_id) from locations');
        res.json(result.rows);
    }catch{
           res.status(500).json({Error:err.message});
    }
});

app.get('/toljob_h',async(req,res)=>{
    try{
        const result = await pool.query('select count(employee_id) from job_history');
        res.json(result.rows);
    }catch{
           res.status(500).json({Error:err.message});
    }
});


const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connected Successfully....on PORT ${PORT}`);
});