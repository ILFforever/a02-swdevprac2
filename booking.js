        // Prevent non-numeric characters in age field
        document.getElementById("inputage").addEventListener("input", function() {
            this.value = this.value.replace(/[^0-9]/g, "");
        });
        
        // Form submission
        document.getElementById("bookingForm").addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Thank you for your booking! We will email you payment details shortly.");
        });

        document.getElementById("onland").addEventListener("change", function() {
            if(this.checked) {
                let confirmed = confirm("Would you like to buy your own tickets?");
                if(confirmed) {
                    alert("Self Tickets Confirmation!");
                }
            }
        });