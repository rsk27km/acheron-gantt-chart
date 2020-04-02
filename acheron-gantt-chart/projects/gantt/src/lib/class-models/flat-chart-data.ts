export class FlatChartData {
    public constructor(
        public id: string,
        public title: string,
        public progress: number,
        public startDate: Date,
        public endDate: Date,
        public resourceName: string,
        public status: string,
        public dependency: string,
        public dueDate: Date,
        public isEditable: boolean,
        public expandable: boolean,
        public level: number,
        public expanded: boolean
    ) { }
}
