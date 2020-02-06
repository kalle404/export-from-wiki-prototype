		const debug = true; 

		var startDate = "";
		var endDate = "";

		// console.log(initRun(startDate, endDate));

		// console.log(getHalfYearArray(y, n)); 
		// console.log(createURL(2019, 12));
		// console.log(testRun(getHalfYearArray(y, n)));

		/* functions */

		function initRun(startDate, endDate){
			// function that checks if filters are set or default
			if(startDate.length != 6 || endDate.length != 6) {
				(debug) ? console.log('finding default filter values') : "" ;
				// filters are not in required format e.g. unset
				// finding default variable values instead
				
				var m = new Date().getMonth();
				var y = new Date().getFullYear();

				endDate = y.toString();
				(m <= 9) ? endDate += "0" + m.toString(): endDate += m.toString();

				startDate = m - 5;
				(startDate < 0) ? y-- : "" ;
				(startDate < 0) ? startDate = 12 + startDate : "" ;
				(startDate <= 9) ? startDate = "0" + startDate.toString() : startDate = startDate.toString() ;
				startDate = y.toString() + startDate;

				
				return [startDate, endDate];
			}
			(debug) ? console.log('custom filter values are set') : "" ;
			return [startDate, endDate];
		}

		// function findSixMonthsEarlier(m, y){}

		function getHalfYearArray(y, m){
			var months = [];
			var counter = 0;

			for (var i = 0; i < 6; i++) {
				if (m - i < 0) {
					months.push([y - 1, 12 - counter]);
					counter++;
				} else {
					months.push([y, m - i]);
				}
			}
		return months;
		}

		function createURL(y, m){
			var monthLabel = "";
			switch(m) {
				case 1:
					monthLabel = "January"; 
					break; 
				case 2: 
					monthLabel = "February"; 
					break; 
				case 3:
					monthLabel = "March"; 
					break;
				case 4:
					monthLabel = "April"; 
					break;
				case 5:
					monthLabel = "May"; 
					break;
				case 6:
					monthLabel = "June"; 
					break;
				case 7:
					monthLabel = "July"; 
					break;
				case 8:
					monthLabel = "August"; 
					break;
				case 9: 
					monthLabel = "September"; 
					break;
				case 10:
					monthLabel = "October"; 
					break;
				case 11:
					monthLabel = "November"; 
					break;
				case 12:
					monthLabel = "December"; 
					break;					
				default: 	
					monthLabel = "";
			}
			return "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_terrorist_incidents_in_January_" + monthLabel + "_" + y + "&contentmodel=wikitext&prop=wikitext&format=json"; 
		}

		function testRun(array) {
			for (var i = 0; i < array.length; i++) {
				console.log(createURL(array[i][0], array[i][1]));
			}
			return null;
		}

		/*
		link to data wiki export desc
		https://stackoverflow.com/questions/38763293/how-to-get-table-data-from-wikipedia-page
		*/