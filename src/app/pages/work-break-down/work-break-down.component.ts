import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-work-break-down',
  templateUrl: './work-break-down.component.html',
  styleUrl: './work-break-down.component.scss'
})
export class WorkBreakDownComponent {

  data: TreeNode[] = [
    {
      label: 'Project',
      expanded: true,
      children: [
        {
          label: 'Sub Project',
          expanded: true,
          children: [
            {
              label: 'Sub Task',
              expanded: true,
              children: [
                {
                  label: 'Work Package',
                  expanded: true,
                  children: [
                    {
                      label: 'Work Package',
                      expanded: true,
                      children: [
                        {
                          label: 'Work Package',
                          expanded: true,
                        }
                      ]
                    }
                  ]
                },

              ]
            },
            {
              label: 'Sub Task',
              expanded: true,
              children: [
                {
                  label: 'Work Package',
                  expanded: true,
                  children: [
                    {
                      label: 'Work Package',
                      expanded: true,
                      children: [
                        {
                          label: 'Work Package',
                          expanded: true,
                        }
                      ]
                    }
                  ]
                },

              ]
            },
          ]
        },
        {
          label: 'Sub Project',
          expanded: true,
          children: [
            {
              label: 'Sub Task',
              expanded: true,
              children: [
                {
                  label: 'Work Package',
                  expanded: true,
                  children: [
                    {
                      label: 'Work Package',
                      expanded: true,
                      children: [
                        {
                          label: 'Work Package',
                          expanded: true,
                        }
                      ]
                    }
                  ]
                },

              ]
            },
            {
              label: 'Sub Task',
              expanded: true,
              children: [
                {
                  label: 'Work Package',
                  expanded: true,
                  children: [
                    {
                      label: 'Work Package',
                      expanded: true,
                      children: [
                        {
                          label: 'Work Package',
                          expanded: true,
                        }
                      ]
                    }
                  ]
                },

              ]
            },
          ]
        },
      ]
    }
  ];

}
