var mom;

        function getSavedValuePost(v) {
            if (!localStorage.getItem(v)) {
                localStorage.setItem(v, "");
                return "";
            }
            return localStorage.getItem(v);
        }

        function post() {
            var title = document.getElementById("myTitle").value;
            var name = document.getElementById("NameSurname").value;
            var text = document.getElementById("myText").value;

            var d = new Date();
            var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var months_v = months[d.getMonth()];
            var days_v = days[d.getDay()];

            if (name == "")
                var komanda = '<div class="card"><h3>' + title + '</h3><h5><br>' + days_v + ', ' + d.getDate() + ' ' + months_v + ' ' + d.getFullYear() + ', ' + time + '</h5> <p class="blog-txt">' + text + '</p></div>'
            else
                var komanda = '<div class="card"><h3>' + title + '</h3><h5>By ' + name + ',<br>' + days_v + ', ' + d.getDate() + ' ' + months_v + ' ' + d.getFullYear() + ', ' + time + '</h5> <p class="blog-txt">' + text + '</p></div>'

            mom = getSavedValuePost("posted");
            document.getElementById("posted").innerHTML = komanda + mom;

            mom = komanda + mom;
            localStorage.setItem("posted", mom);
        }