import React,{useEffect, useState} from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate,useParams,} from 'react-router-dom'
import "./Add.css"
toast.configure();
function Add(props) {
    const[title,settitle]=useState("")
    const[text,settext]=useState("")
    const[date,setDate]=useState()
    const[data,setdata]=useState(JSON.parse(localStorage.getItem("data"))||[])
     const navigate=useNavigate()

    const {id}=useParams()

    const notify = () => {
      toast.success("Task Added", { autoClose: 2000 });
    };

    const notify1 = () => {
      toast.success("Task updated", { autoClose: 2000 });
    };

    useEffect(() => {
    if (!props.data) {
      if (id !== "id") {
        let val = data.find((el) => {
          if(el.id == id)
          return el;
        });
        // console.log("val=",val)
        settext(val.text);
        settitle(val.title);
         const current = new Date(val.date);
        const Udate = `${current.getFullYear()}-${
          current.getMonth() + 1 < 10
            ? "0" + (current.getMonth() + 1)
            : current.getMonth() + 1
        }-${
          current.getDate() < 10 ? "0" + current.getDate() : current.getDate()
        }`;
         setDate(Udate);
        console.log(val);
        
      }
    }
  }, [props.data]);
    
  const update = (id) => {
    let data1 = "";
    // console.log("id",id)
    if (title && date && text && !props.data) {
      data1 = data.map((el) => {
        return el.id == id? { ...el,title:title,text:text,date:date }: el;
      });
      // console.log("updated",data1)
      setdata(data1);
       localStorage.setItem("data",JSON.stringify(data1))
       console.log("updated data",data) 
       // window.location.reload();
      
      props.data1(true);
      navigate("/AddTask");
    } else {
      alert("All fields are mandetory,please enter data");
    }
  };
    // const d=new Date();    
    
    // console.log(d.getDate());
    // console.log(d.getMonth()+1);
    // console.log(d.getFullYear());


    // d.getDate();
    // d.getMonth();   
    // d.getFullYear();
    
    //  console.log(d)

    const handleInput=(e)=>{
        settitle(e.target.value)
        // console.log(title)
    }

    const handleText=(e)=>{
        settext(e.target.value)
        // console.log(e.target.value)
    }



    const saveVal=()=>
    {
       if(text=="" && title=="")
       {
         alert();
         return
       }   
       else
       {
        navigate("/AddTask")
        notify();
          let id=Math.random();
         data.push({id,title,text,date})
          localStorage.setItem("data",JSON.stringify(data))
        // setdata([...data],arr)
       console.log("data",data)
      }
    }

        function addDays(theDate,days)
        {
            return new Date(theDate.getTime()+ days*24*60*60*1000)
        }   

        const changeDate = (e) => {
            const current = new Date();
            const Today = addDays(new Date(), 0);
            const Tomorrow = addDays(new Date(), 1);
            const Week = addDays(new Date(), 7);
            switch (e) {
              case "Today":
                if (Today.getMonth() < 11) {
                  if (Today.getDate() < 10) {
                    setDate(
                      `${Today.getFullYear()}-${0}${
                        Today.getMonth() + 1
                      }-${0}${Today.getDate()}`
                    );
                  } else {
                    setDate(
                      `${Today.getFullYear()}-${0}${
                        Today.getMonth() + 1
                      }-${Today.getDate()}`
                    );
                  }
                } else {
                  if (Today.getDate() < 10) {
                    setDate(
                      `${Today.getFullYear()}-${
                        Today.getMonth() + 1
                      }-${0}${Today.getDate()}`
                    );
                  }
                }
                break;
              case "Tommorrow":
                if (Tomorrow.getMonth() < 11) {
                  if (Tomorrow.getDate() < 10) {
                    setDate(
                      `${Tomorrow.getFullYear()}-${0}${
                        Tomorrow.getMonth() + 1
                      }-${0}${Tomorrow.getDate()}`
                    );
                  } else {
                    setDate(
                      `${Tomorrow.getFullYear()}-${0}${
                        Tomorrow.getMonth() + 1
                      }-${Tomorrow.getDate()}`
                    );
                  }
                } else {
                  if (Tomorrow.getDate() < 10) {
                    setDate(
                      `${Tomorrow.getFullYear()}-${
                        Tomorrow.getMonth() + 1
                      }-${0}${Tomorrow.getDate()}`
                    );
                  }
                }
                break;
              case "NextWeek":
                if (Week.getMonth() < 11) {
                  if (Week.getDate() < 10) {
                    setDate(
                      `${Week.getFullYear()}-${0}${Week.getMonth()+1}-${0}${Week.getDate()}`
                      );
                  } else {
                    setDate(
                      `${Week.getFullYear()}-${0}${Week.getMonth()+1}-${Week.getDate()}`
                    );
                  }
                } else {
                  if (Week.getDate() < 10) {
                    setDate(
                      `${Week.getFullYear()}-${Week.getMonth()+1}-${0}${Week.getDate()}`
                    );
                  }
                }
                break;
              case "NextMonth":
                // console.log("first");
                if (current.getMonth() < 11) {
                  if (current.getDate() < 10) {
                    setDate(
                      `${current.getFullYear()}-${0}${
                        current.getMonth() + 2
                      }-${0}${current.getDate()}`
                    );
                  } else {
                    setDate(
                      `${current.getFullYear()}-${0}${
                        current.getMonth() + 2
                      }-${current.getDate()}`
                    );
                  }
                } else {
                  if (current.getDate() < 10) {
                    setDate(
                      `${current.getFullYear()}-${
                        current.getMonth() + 2
                      }-${0}${current.getDate()}`
                    );
                  }
                }
                break;
              default:
                break;
            }
          };
        return (
          <div>
      <div className='main'>
       
            <input type="text" className='input1' value={title} onChange={handleInput} ></input>    

         <textarea className='txt' value={text} onChange={handleText}></textarea>   

        <div className='container3'>
        <label className='lbl1'>Date:</label>
        <br/>
        <input type="date" className='date' defaultValue={date} onChange={(e)=>{setDate(e.target.value)}}></input>
        <select name="date" onChange={(e)=>{changeDate(e.target.value)}}>
        <option ></option>
            <option value="Today">Today</option>
            <option value="Tommorrow">Tommorrow</option>
            <option value="NextWeek">Next Week</option>
            <option value="NextMonth">Next Month</option>
        </select>
        </div>

        <div className='container4'>
        {props.data ? 
          // <button type="button" className="savebtn" onClick={()=>{saveVal();navigate("/AddTask");}} >Save</button>

          <button type="button" className="savebtn" onClick={()=>saveVal()} >Save</button>

          :
          <button type="button" className="savebtn" onClick={()=>{update(id);navigate("/AddTask"); notify1();}} >Update</button>

        }
        

         <button type="button" className="canclbtn" onClick={()=>navigate("/AddTask")}>Cancle</button>

        </div>    

        </div>
    </div>
  )
}

export default Add