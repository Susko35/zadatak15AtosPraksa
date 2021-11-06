# zadatak15 Nedovršeno

Pokretanje servera
promijeniti imena database na ime baze na koju se spaja (na localhostu)
baza treba imati identicne tablice

pokretanje servera zahtjeva node i npm u command line

unutar server foldera:    
`npm install`    
`npm start`   

Svaki zahtjev vraca JSON objekte, za select uspjesni vraca samo trazeni rezultat. Za ostale uspjesne requestove vraca JSON s elementom
 response u kojem pise success. Svaki error i greska vracaju JSON s elementom response u kojem je ERROR. Uz success i error se šalje jos jedan JSON koji moze objasniti uzrok errora i/ili povratnu poruku iz mysql-a.       
          
 Nije bas jako konzistentno, bilo bi dobro riješiti to. 

# Postman:     
### select GET request
sve ispisuju u json-u
select tasks i users uzimaju sve retke.     
`localhost:5000/select/users/all`    
`localhost:5000/select/tasks/all`    

select users po oibu       
`localhost:5000/select/users`      
uz json u body     
`{"oib": "2147483647"}`     

select tasks po nazivu       
`localhost:5000/select/tasks`     
uz json u body     
`{"naziv_zadatka": "2147483647"}`

### insert POST request
insert tasks      
`localhost:5000/insert/task`    
uz json u body primjer      
`}`      
     `"naziv_zadatka": 103,`    
     `"opis_zadatka": "Opasno",`    
     `"tip_zadatka": "Bug",`    
     `"status_zadatka": "Zatvoren",`    
     `"kompleksnost_zadatka": "5",`   
     `"potroseno_vrijeme": 2,`    
     `"pocetni_datum": "2021-09-30T11:04:51.000Z",`    
     ` "zavrsni_datum": "2021-09-30T13:06:23.000Z"`    
`{`        
insert users      
`localhost:5000/insert/user`    
uz json u body primjer      
`}`        
     `"oib": 103,`     
     `"ime": "marko",`      
     `"prezime": "tamo",`    
     `"radno_mjesto": "neko",`     
     `"level": "admin"`     
`{`          

### update PUT request
update task i oib po nazivu/oib
put request na     
`localhost:5000/update/task`      
`localhost:5000/update/user`      
uz isti json body kao i insert samo sto se s nazivom/oibom bira koji ce se redak mijenjat     

### remove DELETE request
remove users po oibu       
`localhost:5000/remove/user`      
uz json u body     
`{"oib": "2147483647"}`     

remove tasks po nazivu       
`localhost:5000/remove/task`     
uz json u body     
`{"naziv_zadatka": "2147483647"}`

Frontend(Client) and Backend(Server) for zadatak15 Atos Praksa
