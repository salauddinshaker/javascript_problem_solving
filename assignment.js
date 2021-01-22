

        // Converting kilometer to meter

        function kilometerToMeter(km) {

            if (km < 0) {
                console.log('Unexpected input ');
            }
            else {
                var meter = km * 1000;
            }
            return meter;
        }

        var result = kilometerToMeter(6);
        console.log(result);



        // Budget Calculator

        function budgetCalculator(watch, phone, laptop) {

            // watch price counting
            if (watch <= 0) {
                console.log('Unexpected input');
            }
            else {
                var watchPrice = watch * 50;
            }

            // phone price counting

            if (phone <= 0) {
                console.log('Unexpected input');
            }
            else if (phone > 0) {
                var phonePrice = phone * 100;
            }

            // laptop price counting

            if (laptop <= 0) {
                console.log('Unexpected input');
            }
            else if (laptop > 0) {
                var laptopPrice = phone * 500;
            }
            var total = laptopPrice + phonePrice + watchPrice;
            return total;
        }

        var totalPrice = budgetCalculator(9, 5, 7);
        console.log(totalPrice);




        // Hotel cost calculating per day

        function hotelCost(day) {
            var totalCost = 0;
            if (day <= 10) {
                totalCost = day * 100;
            } else if (day <= 20) {
                var first10DayCost = 10 * 100;
                var remainigDay = day - 10;
                var remainigDayCost = remainingDay * 80;
                totalCost = first10DayCost + remainigDayCost;
            } else {
                var first10DayCost = 10 * 100;
                var second10DayCost = 10 * 80;
                var remainigDay = day - 20;
                var remainigDayCost = remainigDay * 50;
                totalCost = first10DayCost + second10DayCost + remainigDayCost;
            }
            return totalCost;
        }
        var result = hotelCost(21);
        console.log(result);



        //  finding longest string 

        function megaFriend(arr) {
            var long1 = arr[0];
            for (i = 0; i < arr.length; i++) {
                if (arr[i] == " ") {
                    console.log('There is no value in this index of array');
                }
                if (arr[i].length > long1.length) {
                    long1 = arr[i];
                }
            }
            return long1;
        }

        var result = megaFriend(['Kabir', 'Ashraf Mahmud', 'Saber Hossain', 'Toukir', 'Sujon Mir']);
        console.log(result);

