var historico = []

        function insert(num){
            var numero = document.getElementById('resto').value;
            document.getElementById('resto').value = numero + num;
        }

        function clean(){
            document.getElementById('resto').value = "";
        }

        function back(){
           numero = document.getElementById('resto').value;
           document.getElementById('resto').value = numero.substring(0, numero.length -1);
        }

        function calcular(){ 
            numero = document.getElementById('resto').value;
            if(numero){
                var resultado = document.getElementById('resto').value = eval(numero); 
                historico.push(numero + ' = ' + resultado);
                atualizarHistorico(); 
            }
        }
        
        function atualizarHistorico(){
            var campoHisDiv = document.getElementById('campoHistorico');
            campoHisDiv.innerHTML = "";
            for(var i = 0; i < historico.length;i++){
                var p = document.createElement('p');
                p.innerText = historico[i];
                campoHisDiv.appendChild(p);
            }
        }