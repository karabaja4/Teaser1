module TeaserSPaceName {
    export class Teaser {
        public Controls: Array<boolean>;
        public panelView;
        public pnlView19;
        public pnlView21;
        public TeaserN;
        public PartnerTeaser = [7,8];
        public PrivatEAZTeaser = [1,5,6];
        public GewerblichEAZTeaser = [2,3,4];
        constructor() {
            this.TeaserN = {
                T1: 1,
                T2: 2,
                T3: 3,
                T4: 4,
                T5: 5,
                T6: 6,
                T7: 7,
                T8: 8,
            };
            this.DisplayRandomTeaser(0, "Partner", 0);
        }
        public DisplayRandomTeaser(_numberOfPanels: number, account, MediaID): void {
            this.Controls.forEach(function (control:any) {
                if (control instanceof Boolean) {
                    if (control)
                        control = false;
                }
            });
            var searchTeaser: boolean = true;
            var tryCount: number = 0;
            while (true) {
                var max = this.TeaserN.length;
                var random: number = Math.floor(Math.random() * max);
                if (account !== "Partner") {
                    break;
                }
                if (random == this.TeaserN.T1 && MediaID != 0)
                    continue;
                if (random == this.TeaserN.T2 && MediaID != 0 && MediaID != 114 && MediaID != 115)
                    continue;
                if (random == this.TeaserN.T3 && (MediaID == 114 || MediaID == 115))
                    continue;
                if (random == this.TeaserN.T4 && MediaID != 0)
                    continue;
                if (random == this.TeaserN.T5 && MediaID != 0)
                    continue;
                if (random == this.TeaserN.T6 && MediaID != 0)
                    continue;
                if (random == this.TeaserN.T7 && MediaID != 0)
                    continue;
                if (random == this.TeaserN.T8 && MediaID != 0 || random == this.TeaserN.T8 && MediaID == 0 && new Date() > new Date(2020, 8, 31))
                    continue;
                if (account == "Partner" && this.PartnerTeaser.indexOf(random) !== -1)
                    searchTeaser = false;
                if (account == "PrivatEAZ" && this.PrivatEAZTeaser.indexOf(random) !== -1)
                    searchTeaser = false;
                if (account == "GewerblichEAZ" && this.GewerblichEAZTeaser.indexOf(random) !== -1)
                    searchTeaser = false;
                if (random == this.TeaserN.T8)
                    searchTeaser = false;
                if (!searchTeaser || tryCount >= 10) {
                    var panelView = "pnlView" + random;
                    if (panelView == null || searchTeaser) {
                        if (account == "Partner" || account == "GewerblichEAZ") {
                            panelView = this.pnlView19;
                        }
                        else {
                            panelView = this.pnlView21;
                        }
                    }
                    break;
                }
                tryCount++;
            }
        }
    }
}