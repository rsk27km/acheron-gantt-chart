export interface ChartData {
    id: string;
    title: string;
    progress: number;
    startDate: Date;
    endDate: Date;
    resourceName: string;
    status: string;
    dependency: string;
    subSteps: Array<ChartData>;
    dueDate?: Date;
    isEditable?: boolean;
    notes?: string;
    expanded?: boolean;
}
