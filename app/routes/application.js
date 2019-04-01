import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  async beforeModel() {
    for(let i = 0; i < 10; i++) {
      try {
        await this.store.findRecord('foo', i);
      } catch (e) {
        let record = this.store.createRecord('foo', { text: 'hi', id: i });
        await record.save();
      }
    }
  }

  async model() {
    return { foos: await this.store.findAll('foo') };
  }
}
