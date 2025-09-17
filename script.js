function minDate(dates) {

	let newarr=dates.map((item)=>{
		return item.split("/")
	})

	let min=[infinity,infinity]
	let indices=0
	newarr.map((item,index)=>{
		if(parseInt(item[1])<min[0]){
min.shift()
			min.unshift(parseInt(item[1])
						min.pop()
			min.push(parseInt(item[2]))
			indices=index
			
		}
		if(parseInt(item[1])==min[0] && parseInt(item[2])<min[1]){
			min.pop()
			min.push(parseInt(item[2]))
			indices=index
		}
	})

return dates.filter((_,index)=>index==indices)
	
}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];
// prompt("hello")
alert(minDate(dates));
