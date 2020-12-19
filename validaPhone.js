// os 3 primeiros digitos representam o codigo do pais
// o quanto e o quinto digitos são referentes ao DDD
// o sexto digito identifica se é celular
// a expressão deve conter 14 digitos no total

async function validaCellPhone(phone) {
    let promise = new Promise((sucess, reject) => {
        let phoneArr = Array.from(phone);
        let nonoDigito = parseInt(phoneArr[5], 10);
        let error = {};
        if (phone == undefined) {
            error.code = "phone-não-informado";
            error.message = "informe o numero de celular";
            let status = false;
            reject({ status, error });
        } else if (phone.length != 14) {
            if (phone.length > 14) {
                error.code = "phone-numero-invalido";
                error.message = "o numero tem mais de 9 digitos";
                let status = false;
                reject({ status, error });
            } else {
                error.code = "phone-numero-invalido";
                error.message = "o numero tem menos de 9 digitos";
                let status = false;
                reject({ status, error });
            };
        } else if (nonoDigito != 9) {
            error.code = "phone-não-parece-ser-celular";
            error.message = "o numero informado não parece ser de celular";
            let status = false;
            reject({status, error});
        }
        else {
            error = null;
            let status = true;
            sucess({ status, error });
        }
    });

    return promise;
};

module.exports = validaCellPhone;