// Scene Movement
AFRAME.registerComponent("terrain-movement", {
    schema: {
        positionXSpeed: { type: "number", default: 0 },
        positionZSpeed: { type: "number", default: 0 },
    },

    init: function () {
        window.addEventListener("keydown", (e) => {
            if (e.key === "w" && this.data.positionZSpeed <= 3 || e.key === "ArrowUp" && this.data.positionZSpeed <= 3) {
                this.data.positionZSpeed += 0.1;
            }

            if (e.key === "s" && this.data.positionZSpeed >= -3 || e.key === "ArrowDown" && this.data.positionZSpeed >= -3) {
                this.data.positionZSpeed -= 0.1;
            }

            if (e.key === "a" && this.data.positionXSpeed <= 3 || e.key === "ArrowLeft" && this.data.positionXSpeed <= 3) {
                this.data.positionXSpeed += 0.1;
            }

            if (e.key === "d" && this.data.positionXSpeed >= -3 || e.key === "ArrowRight" && this.data.positionXSpeed >= -3) {
                this.data.positionXSpeed -= 0.1;
            }
        })
    },

    tick: function () {
        var position = this.el.getAttribute("position");

        position.z += this.data.positionZSpeed;
        position.x += this.data.positionXSpeed;

        this.el.setAttribute("position", position)
    },
})



// Scubadiver Movement
AFRAME.registerComponent("scubadiver", {
    schema: {
        rotationSpeed: { type: "number", default: 0 },
    },

    init: function () {
        window.addEventListener("keydown", (e) => {
            if (e.key === "w" && this.data.rotationSpeed > -1 || e.key === "ArrowUp" && this.data.rotationSpeed > -1) {
                this.data.rotationSpeed -= 0.01;
            }

            if (e.key === "s" && this.data.rotationSpeed < 1 || e.key === "ArrowDown" && this.data.rotationSpeed < 1) {
                this.data.rotationSpeed += 0.01;
            }
        })
    },

    tick: function () {
        var rotation = this.el.getAttribute("rotation");
        console.log(this.data.rotationSpeed)
        console.log(rotation.x)

        if (rotation.x > -70 && rotation.x < -20) {
            rotation.x += this.data.rotationSpeed;
        }

        this.el.setAttribute("rotation", rotation);
    }
})