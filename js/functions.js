		const debug = true; 
		const totalCount = 120; 

		var startDate = "201806";
		var endDate = "201906";

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

				(debug) ? console.log('found values are ' + startDate + " " + endDate) : "" ;
				return [startDate, endDate];
			}
			(debug) ? console.log('custom filter values are set') : "" ;
			(debug) ? console.log('found values are ' + startDate + " " + endDate) : "" ;
			return [startDate, endDate];
		}

		function createMonthArray(array) {
			var monthArray = [];

			var startYear = array[0].toString();
			startYear = startYear.substring(0,4);
			var startMonth = array[0].toString();
			startMonth = startMonth.substring(4,6);
			var endYear = array[1].toString();
			endYear = endYear.substring(0,4);
			var endMonth = array[1].toString();
			endMonth = endMonth.substring(4,6);


			totalCounter = totalCount; 

			for (i = endYear; i >= startYear && totalCounter >= 0; i--){
				if (startYear == endYear && startMonth > endMonth) { 
					(debug) ? console.error(' Start date later than end date! ') : "" ;
					break; 
				}

				var monthCounter = 11; 
				(i == endYear) ? monthCounter = Number(endMonth) : "" ;

				for (y = monthCounter; y >= 0 && totalCounter >= 0; y--) {
					totalCounter --; 
					var yString = y.toString();
					(yString.length < 2) ? yString = "0" + yString : "" ; 
					
					monthArray.push(i + yString);
					
					(totalCounter < 0 && debug) ? console.error(' Will not produce more that 10 years of data! ') : "" ;
					if (i == startYear && y == startMonth) { break; }
				}
			}

			return monthArray; 
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