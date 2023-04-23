class ElectricDevices {
    constructor(name, power, color) {
        this.name = name,
            this.power = power,
            this.color = color,
            this.enabled = false;
    }

    getPower() {
        return this.enabled ? this.power : 0;
    }

    toggleEnable() {
        this.enabled = !this.enabled
    }


    getInfo() {
        return ('Устройство ' + this.name + this.enabled + ' включено' + ' выключено' + " текущее потребление:" + this.getPower() + ' W')
    }
}


class Fridge extends ElectricDevices {
    constructor(temperature, power, name) {
        super(name, power);
        this.temperature = temperature;
        this.power = power
            this.name = name
    }
}


class Microwave extends ElectricDevices {
    constructor(numberOfModes, power, name) {
        super(name, power);
        this.numberOfModes = numberOfModes;
        this.power = power
        this.name = name
    }
}


function sum(arr) {
    let result = 0
    arr.forEach((item) => {
        result += item.getPower()
    })
    return result;
}


const fridge = new Fridge(-20, 200, 'Холодильник');
const microwave = new Microwave(5, 80, 'Микроволновка');


console.log(fridge.getInfo())
fridge.toggleEnable()
console.log(fridge.getInfo())


console.log(microwave.getInfo())
microwave.toggleEnable()
console.log(microwave.getInfo())


console.log('Общее потребление электроприборов ' + sum([fridge, microwave]) + ' w')
