class Pall {
  constructor(x, y, raadius, ctx) {
    this.x = x;
    this.y = y;
    this.raadius = raadius;
    this.ctx = ctx;
  }

  joonista() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.raadius, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}