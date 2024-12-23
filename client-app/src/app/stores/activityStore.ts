import { makeAutoObservable } from 'mobx'
import { Activity } from '../models/Activity';
import agent from '../API/agent';

export default class ActivityStore {
    activities: Activity[] = [];
    selectedActivity: Activity | null = null;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this)
    }

    loadActivities = async () => {
        this.loadingInitial = true;
        try {
            const activities = await agent.Activities.list();
            activities.forEach(activity => {
                activity.date = activity.date.split('T')[0];
                this.activities.push(activity);
            })
        } catch(error) {
            console.log(error);
        } finally {
            this.loadingInitial = false;
        }
    }
}