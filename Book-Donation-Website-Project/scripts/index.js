

//setting up guides
const loggedOutLinks=document.querySelectorAll('.logged-out');
const loggedInLinks=document.querySelectorAll('.logged-in');
const accountDetails=document.querySelector('.account-details');


const setupUI=(user)=>{
  if(user){
   //acc info
   db.collection('users').doc(user.uid).get().then(doc=>{
    let html=`<div class="u"><div>Logged in as ${user.email}</div>
    <br><div style="font-size:21px;color:green;"><strong>USER DETAILS:</strong></div><br>
    <i class="far fa-address-card" style="font-size:30px;"></i><br>
    <br>
    <div>Name: ${doc.data().name}</div>
    <div>Year of study: ${doc.data().year}</div>
    <div>Branch: ${doc.data().branch}</div>
    <div>Contact number: ${doc.data().contact}</div>
    </div>
    `;

    accountDetails.innerHTML=html;
   })
  

    //toggle UI elements
    loggedInLinks.forEach(item=>
      item.style.display='block');
      loggedOutLinks.forEach(item=>
        item.style.display='none');

    }
    else
    {
      //hide acc info
      accountDetails.innerHTML="";

      //toggle Ui elems
      loggedInLinks.forEach(item=>
        item.style.display='none');
        loggedOutLinks.forEach(item=>
          item.style.display='block');
    }
  }

  const deleteBook= (id) =>{
    const recipes=document.querySelectorAll('.bo');
    recipes.forEach(recipe =>{
        if(recipe.getAttribute('data-id')===id){
            recipe.remove();
            console.log('deleted!')
           
        }
    });
};




//setup guides
const setupGuides=(data,u,id)=>{
    
    if(u)
    {
    const em=u.email;
    let html='';
    let ye=0;
      if(data.email===em)
      {
         const yr=data.year;
         if(data.year==='FY')
         {
           ye=1;
         }
         else if(data.year==='SY')
         {
           ye=2;
         }
         else if(data.year==='TY')
         {
           ye=3;
         }
         else
         {
           ye=4;
         }
      const li=`<li class="bo" data-id=${id} colle=${ye} br=${data.branch}>
        
      <div class="column">
          <div class="card">
              <strong><div>Book name: ${data.title}</div>
              <br>
              <div>Author: ${data.author}</div>
              <br>
              <br>
              <div style="font-family:'Calistoga';font-size:18px;color:black;">BOOK DETAILS:</div>
              <br>
              <div>Owner: ${data.owner}</div>
              
              <div>Contact Number: ${data.contact}</div>
              <div>Email: ${data.email}</div>
              <div>Year: ${data.year}</div>
              <br>
              <button class="btn black btn-sm my-2 del">Delete</button>
              </strong>
          
          </div>
      </div>
  </li>
      `;
      html+=li;
     
      if(guideList!=null)
      {
      guideList.innerHTML+=html;
      }
    
      guideList.addEventListener('click', (e)=>{
        if(e.target.tagName==='BUTTON')
        {
          
          var id1=e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id');
          var yrr=e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('colle');
          var bran=e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('br');
          
          if(bran==='IT')
          {
              if(yrr==1)
              {
                db.collection('itfy').doc(id1).delete().then( ()=>{
                deleteBook(id1);
                
                });
              } 
              else if(yrr==2)
                {
                db.collection('itsy').doc(id1).delete().then( ()=>{
                
                deleteBook(id1);
               
                });
              }
              else if(yrr==3)
              {
                db.collection('itty').doc(id1).delete().then( ()=>{
                  
                  deleteBook(id1);
                
                });
              }
              else
              {
                db.collection('itly').doc(id1).delete().then( ()=>{
                
                  deleteBook(id1);
                  
                });
              }
            }
            else if(bran==='CS')
            {
              if(yrr==1)
              {
                db.collection('csfy').doc(id1).delete().then( ()=>{
                deleteBook(id1);
                
                
                });
              } 
              else if(yrr==2)
                {
                db.collection('cssy').doc(id1).delete().then( ()=>{
                
                deleteBook(id1);
                
                });
              }
              else if(yrr==3)
              {
                db.collection('csty').doc(id1).delete().then( ()=>{
                  
                  deleteBook(id1);
                  
                });
              }
              else
              {
                db.collection('csly').doc(id1).delete().then( ()=>{
                
                  deleteBook(id1);
                 
                });
              }
            
          }

          else if(bran==='EXTC')
            {
              if(yrr==1)
              {
                db.collection('exfy').doc(id1).delete().then( ()=>{
                deleteBook(id1);
                
                
                });
              } 
              else if(yrr==2)
                {
                db.collection('exsy').doc(id1).delete().then( ()=>{
                
                deleteBook(id1);
                
                });
              }
              else if(yrr==3)
              {
                db.collection('exty').doc(id1).delete().then( ()=>{
                  
                  deleteBook(id1);
                  
                });
              }
              else
              {
                db.collection('exly').doc(id1).delete().then( ()=>{
                
                  deleteBook(id1);
                 
                });
              }
            
          }

          else if(bran==='MECH')
            {
              if(yrr==1)
              {
                db.collection('mefy').doc(id1).delete().then( ()=>{
                deleteBook(id1);
                
                
                });
              } 
              else if(yrr==2)
                {
                db.collection('mesy').doc(id1).delete().then( ()=>{
                
                deleteBook(id1);
                
                });
              }
              else if(yrr==3)
              {
                db.collection('mety').doc(id1).delete().then( ()=>{
                  
                  deleteBook(id1);
                  
                });
              }
              else
              {
                db.collection('mely').doc(id1).delete().then( ()=>{
                
                  deleteBook(id1);
                 
                });
              }
            
          }

          else if(bran==='ETRX')
            {
              if(yrr==1)
              {
                db.collection('etfy').doc(id1).delete().then( ()=>{
                deleteBook(id1);
                
                
                });
              } 
              else if(yrr==2)
                {
                db.collection('etsy').doc(id1).delete().then( ()=>{
                
                deleteBook(id1);
                
                });
              }
              else if(yrr==3)
              {
                db.collection('etty').doc(id1).delete().then( ()=>{
                  
                  deleteBook(id1);
                  
                });
              }
              else
              {
                db.collection('etly').doc(id1).delete().then( ()=>{
                
                  deleteBook(id1);
                 
                });
              }
            
          }
        } 
  });


      
      }
    }
      else
      {
     
        guideList.innerHTML="";
      }
      
    } 

    const viewBook=(book,id,yr,branch)=>
    {
      
        let htm=
        `<li class="bo" data-id=${id}>
        
      <div class="column">
          <div class="card">
              <strong><div>Book name: ${book.title}</div>
              <br>
              <div>Author: ${book.author}</div>
              <br>
              <br>
              <div style="font-family:'Calistoga';font-size:18px;color:black;">BOOK DETAILS:</div>
              <br>
              <div>Owner: ${book.owner}</div>
              
              <div>Contact Number: ${book.contact}</div>
              <div>Email: ${book.email}</div>
              <div>Year: ${book.year}</div>
              
              
              </strong>
          
          </div>
      </div>
  </li>
        `;

        if(list.length!=0)
        {
          if(branch==='IT')
          {
          if(yr==1)
              list[0].innerHTML+=htm;
          
          else if(yr==2)
          {
              list[1].innerHTML+=htm;
          }
          else if(yr==3)
          {
              list[2].innerHTML+=htm;
          }
          else
          {
              list[3].innerHTML+=htm;
          }
        }
      }
        else if(list1.length!=0)
        {
        if(branch==='CS')
        {
          if(yr==1)
              list1[0].innerHTML+=htm;
          
          else if(yr==2)
          {
              list1[1].innerHTML+=htm;
          }
          else if(yr==3)
          {
              list1[2].innerHTML+=htm;
          }
          else
          {
              list1[3].innerHTML+=htm;
          }
        }
      }
      else if(list2.length!=0)
      {
      if(branch==='EXTC')
      {
        if(yr==1)
            list2[0].innerHTML+=htm;
        
        else if(yr==2)
        {
            list2[1].innerHTML+=htm;
        }
        else if(yr==3)
        {
            list2[2].innerHTML+=htm;
        }
        else
        {
            list2[3].innerHTML+=htm;
        }
      }
    }

    else if(list3.length!=0)
      {
      if(branch==='MECH')
      {
        if(yr==1)
            list3[0].innerHTML+=htm;
        
        else if(yr==2)
        {
            list3[1].innerHTML+=htm;
        }
        else if(yr==3)
        {
            list3[2].innerHTML+=htm;
        }
        else
        {
            list3[3].innerHTML+=htm;
        }
      }
    }
      
    else if(list4.length!=0)
    {
    if(branch==='ETRX')
    {
      if(yr==1)
          list4[0].innerHTML+=htm;
      
      else if(yr==2)
      {
          list4[1].innerHTML+=htm;
      }
      else if(yr==3)
      {
          list4[2].innerHTML+=htm;
      }
      else
      {
          list4[3].innerHTML+=htm;
      }
    }
  }
    };

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
    
  });

