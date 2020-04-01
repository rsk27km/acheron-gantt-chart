export interface ChartData {
    id: string;
    title: string;
    progress: number;
    startDate: Date;
    endDate: Date;
    resourceName: string;
    status: string;
    isParent: boolean;
    dependencies: Array<string>;
    subSteps: Array<ChartData>;
    dueDate?: Date;
    notes?: string;
    isEditable?: boolean;
}
