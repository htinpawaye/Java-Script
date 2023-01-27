$(document).ready(function () {
    $('.show').click(function () {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../data/hotels.xml', true);
        xhr.send();
        xhr.onload = function () {
            let xmlresponse = xhr.responseXML;
            console.log(xmlresponse.getElementsByTagName('room'));
            let rooms = xmlresponse.getElementsByTagName('room');
            let row = document.createElement('div');
            row.setAttribute('class', 'row');
            for (let index = 0; index < rooms.length; index++) {
                let col = document.createElement('div');
                col.setAttribute('class', 'col-md-4');
                let roomNo = rooms[index].getElementsByTagName('no')[0].innerHTML;
                console.log(roomNo);
                let h2 = document.createElement('h2');
                h2.innerHTML = roomNo;

                let roomType = rooms[index].getElementsByTagName('type')[0].innerHTML;
                let type = document.createElement('h2');
                type.innerHTML = roomType;

                let roomPrice = rooms[index].getElementsByTagName('price')[0].innerHTML;
                let p = document.createElement('p');
                p.innerHTML = roomPrice;

                let roomFacility = rooms[index].getElementsByTagName('facility')[0].innerHTML;
                let facility = document.createElement('p');
                facility.innerHTML = roomFacility;

                col.appendChild(h2);
                col.appendChild(type);
                col.appendChild(p);
                col.appendChild(facility);

                row.appendChild(col);
            }
            $('.container').append(row);
        }
    })

    $('.show_doctor').click(function () {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../data/doctors.json', true);
        xhr.send();
        xhr.onload = function () {
            let response_doctor = xhr.responseText;
            let doctors = JSON.parse(response_doctor);
            console.log(doctors.length);

            let table = document.createElement('table');
            table.setAttribute('class', 'table');
            table.classList.add('class', 'table-striped');

            let tr = document.createElement('tr');
            let name = document.createElement('th');
            name.innerText = "name";

            let speciality = document.createElement('th');
            speciality.innerText = "speciality";

            let mail = document.createElement('th');
            mail.innerText = "mail";

            tr.append(name)
            tr.append(speciality)
            tr.append(mail)

            table.append(tr);

            for (let index = 0; index < doctors.length; index++) {
                tr = document.createElement('tr');
                name = document.createElement('td');
                name.innerText = doctors[index].name;

                speciality = document.createElement('td');
                speciality.innerText = doctors[index].speciality;

                mail = document.createElement('td');
                mail.innerText = doctors[index].mail;

                tr.append(name)
                tr.append(speciality)
                tr.append(mail)

                table.append(tr);

            }
            let div = document.createElement('div');
            div.setAttribute('class', 'row');

            let col = document.createElement('div');
            col.setAttribute('class', 'col-md-10');

            col.appendChild(table);
            div.appendChild(col);

            $('.container').append(div);
        }
    })
})